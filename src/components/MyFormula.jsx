"use client";

import Form from "next/form";
import { useState } from "react";

export default function NewRecipePage() {
  /* Du starter med at lave et tomt felt for ingredienserne og når du vil ændre listen af ingredienser*/
  const [ingredients, setIngredients] = useState([""]);

  /* Tilføje et ekstra tomt felt, dette til at tilføje ingredienser til listen*/
  const addIngredient = () => setIngredients([...ingredients, ""]);

  /* Kan læses som: "opdater ingrediens nummer x med teksten y*/
  const updateIngredient = (index, value) => {
    const updated = [...ingredients]; /* Laver en kopi af listen af ingredienser*/
    updated[index] = value; /* Får teksten ind på den rigtige plads*/
    setIngredients(updated); /* Gemmer den opdaterede liste*/
  };

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Opret ny opskrift</h1>
      <Form action="/recipes" className="flex flex-col gap-4">
        <input name="name" placeholder="Opskriftens navn" className="border p-2 rounded" />

        <textarea name="instructions" placeholder="Instruktioner..." className="border p-2 rounded h-32" />

        <div>
          <label className="font-semibold">Ingredienser</label>
          {ingredients.map((ing /* Selve ingrediensen*/, i /* Et slags automatisk id som en ingrediens får så react ved hvad den skal have fat i */) => (
            <input key={i} value={ing} onChange={(e) => updateIngredient(i, e.target.value)} placeholder={`Ingrediens ${i + 1}`} className="border p-2 rounded w-full mt-1" />
          ))}
          <button type="button" onClick={addIngredient} className="mt-2 text-blue-600 underline">
            + Tilføj ingrediens
          </button>
        </div>

        <input name="prepTime" type="number" placeholder="Forberedelsestid (min)" className="border p-2 rounded" />
        <input name="cookTime" type="number" placeholder="Tilberedningstid (min)" className="border p-2 rounded" />
        <input name="servings" type="number" placeholder="Antal portioner" className="border p-2 rounded" />

        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Opret opskrift
        </button>
      </Form>
    </main>
  );
}
