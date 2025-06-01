import "../style/RecipeForm.css";

const RecipeForm = () => {
  return (
    <div className="box">
      <h1>Add Your Recipe</h1>
      <div className="form-container">
        <div className="input-group">
          <label>
            Nama Resep : <input type="text" className="input-recipe" />
          </label>
          <label>
            Kategori :
            <div className="box-kategory">
              <input type="checkbox" className="checkbox" /> Pedas
              <input type="checkbox" className="checkbox" /> Gurih
              <input type="checkbox" className="checkbox" /> Manis
              <input type="checkbox" className="checkbox" /> Tradisional
              <input type="checkbox" className="checkbox" /> Internasional
            </div>
          </label>
          <label>
            Bahan-Bahan : <input type="text" className="input-text" />
          </label>
          <label>
            Cara Memasak : <input type="text" className="input-text" />
          </label>
          <label>
            Foto :
            <input type="file" className="input-file" />
          </label>
          <button className="btn-submit">Add Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;
