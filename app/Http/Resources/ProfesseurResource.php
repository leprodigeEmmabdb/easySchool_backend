<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfesseurResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return  [
            'id'=>$this->id,
            'nom'=>$this->nom,
            'post_nom'=>$this->post_nom,
            'prenom'=>$this->prenom,
            'promotion'=>$this->promotion,
        ];
    }
}
