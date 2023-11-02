<?php

use App\Http\Controllers\Api\CoursController;
use App\Http\Controllers\Api\EtudiantController;
use App\Http\Controllers\Api\NoteController;
use App\Http\Controllers\Api\ProfesseurController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


#global routes
#TO DO: only user connected have to get a permission
Route::apiResource('cours',CoursController::class);
Route::apiResource('etudiant',EtudiantController::class);
Route::apiResource('professeur',ProfesseurController::class);
Route::apiResource('note',NoteController::class);

#search data route
#TO DO: only user connected have to get a permission
Route::get('note/getAllNoteforStudent/{id}',[NoteController::class,'getAllNoteforStudent']);
Route::get('cours/getAllCoursesAsOfProfessor/{id}',[CoursController::class,'getAllCoursesAsOfProfessor']);
