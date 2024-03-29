<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Models\Formation;
use App\Models\Autre;
use App\Models\Utilisateur;
use App\Models\Admin;
use App\Models\Reserver;
use App\Models\Resultat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth ;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class RepportingController extends Controller
{
    function admin(Request $request)
    {
        $users = User::has('admin')
            ->with('admin.formation')
            ->get();
        // $admins=User::find(1)->with("admins");
        // die($users);
        $formations = Formation::all();
        $i = 1;
        return view("admin.index", compact("users", "formations", "i"));

    }


    function admin_store(Request $request)
    {
        try {
            $validated = $request->validate([
                'nom' => 'required|max:255',
                'post_nom' => 'max:255',
                'prenom' => 'required|max:255',
                'adresse' => 'max:255',
                'telephone' => 'required|max:20',
                'email' => ['required', 'string', 'email', 'max:255'],
            ]);
            $user = new User;
            $user->nom = $validated['nom'];
            $user->post_nom = $validated['post_nom'];
            $user->prenom = $validated['prenom'];
            $user->telephone = $validated['telephone'];
            $user->adresse = $validated['adresse'];
            $user->email = $validated['email'];
            $user->password = Hash::make("password");
            $user->save();

            $admin = Admin::create([
                'user_id' => $user->id,
            ]);
            return redirect()->back()->with('success', 'creation avec success');
        } catch (\Throwable $th) {
            return response()->json(['message' => $th], 500);
        }
    }






    function utilisateur(Request $request)
    {
        $users = User::has('utilisateur')
            ->with('utilisateur.note')
            ->get();
        // $admins=User::find(1)->with("admins");
        // die($users);
        $formations = Formation::all();
        $i = 1;
        return view("utilisateurs.index", compact("users", "formations", "i"));

    }
    function reservation(Request $request)
    {
        $reservations = User::has('reservation')->get();
        // $admins=User::find(1)->with("admins");
        // die($users);
        $formations = Formation::all();
        
        return view("reservarion.index", compact("reservations"));

    }


    function utilisateur_store(Request $request){
        // dd($request);
        try {
            // $validated = $request->validate([
            //     'nom' => ['required','max:255'],
            //     'post_nom' => ['max:255'],
            //     'prenom' => ['required','max:255'],
            //     'adresse' => 'max:255',
            //     'promotion' => 'max:255',
            //     'telephone' => ['required','max:20'],
            //     'email' => ['email', 'max:255'],
            //     'password' => ['min:20'],
            // ]);
            
            // $user = new User;
            // $user->nom = $validated['nom'];
            // $user->post_nom = $validated['post_nom'];
            // $user->prenom = $validated['prenom'];
            // $user->telephone = $validated['telephone'];
            // $user->adresse = $validated['adresse'];
            // $user->email = $validated['email'];
            // $user->password = Hash::make("password");
            // $user->save();

            $user = User::create([
                'nom'=>$request->nom,
                'post_nom'=>$request->post_nom,
                'prenom'=>$request->prenom,
                'telephone'=>$request->telephone,
                'adresse'=>$request->adresse,
                'email'=>$request->email,
                'password'=>$request->password,
            ]);

            $admin = Utilisateur::create([
                'user_id' => $user->id,
                
            ]);
            return redirect()->back() > with('success', 'creation avec success');
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function resultat(Request $request){
        $jeu = Resultat::all();
        $joueurs =User::has('resultats')->get();
        // dd($users);
        $i=0;
        
        
        return view('autres.resultat',compact('i','joueurs'));
    }

    public function autre(Request $request){
        $autres=Autre::all();
        $users = DB::table('users')
        ->join('admins', 'users.id', '=', 'admins.user_id')
        ->select('users.*')
        ->get();
        // dd($users);
        $i=0;
        return view('autres.index',compact('autres','i','users'));
    }
    public function formation(Request $request){
        $formations=Formation::all();
        $users = DB::table('users')
        ->join('admins', 'users.id', '=', 'admins.user_id')
        ->select('users.*')
        ->get();
        // dd($users);
        $i=0;
        return view('formation.index',compact('formations','i','users'));
    }

    public function formation_store(Request $request){
        try {
            $request->validate([
                'titre' => 'required',
                'description' => 'required',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',]);

            $admin=Auth::user()->id; 
            $image = $request->file('image');

            // Enregistrer l'image dans le stockage
            $imagePath = $image->store('public/images');
    
       // $admin = User::findOrFail($request->admin)->admin();
       // $admin=User::findOrFail($request->admin)->admins;
        // dd($admin->user_id);
        Formation::create([
            'title'=>$request->titre,
            'description'=>$request->description,
            'path'=>$imagePath,
            'admin_id'=>$admin
        ]);
        return redirect()->back();
    
} catch (\Throwable $th) {
    return response()->json(['message' => $th], 500);
}

}
public function autre_store(Request $request){
        
    $request->validate([
        'titre' => 'required',
        'description' => 'required',
        ]);

        $admin=Auth::user()->id; 
        
        $file = $request->file('file');
    
        // Enregistrer l'image dans le stockage
        $filePath = $file->storeAs('public/jeux', $file->getClientOriginalName());

   
   Autre::create([
        'title'=>$request->titre,
        'description'=>$request->description,
        'type'=>$request->type,
        'path'=>$filePath,
        'admin_id'=>$admin
    ]);
   
    
    return redirect()->back();

}

}

