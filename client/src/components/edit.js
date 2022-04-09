import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
    const [form, setForm] = useState({
      name: "",
      description: "",
      needs: "",
      causes: [],
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
          const id = params.id.toString();
          const response = await fetch(`/cause/${params.id.toString()}`);
      
          if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
      
          const cause = await response.json();
          if (!cause) {
            window.alert(`Cause with id ${id} not found`);
            navigate("/");
            return;
          }
      
          setForm(cause);
        }
      
        fetchData();
      
        return;
    }, [params.id, navigate]);
    
     // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
  
    async function onSubmit(e) {
        e.preventDefault();
        const editedCause = {
            name: form.name,
            description: form.description,
            needs: form.needs,
        };
        // This will send a post request to update the data in the database.
        await fetch(`/update/${params.id}`, {
            method: "POST",
            body: JSON.stringify(editedCause),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        navigate("/");
    }

    return (
        <div>
            <h3>Update Cause</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Cause Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={form.description}
                        onChange={(e) => updateForm({ description: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="needs">Needs</label>
                    <input
                        type="text"
                        className="form-control"
                        id="needs"
                        value={form.needs}
                        onChange={(e) => updateForm({ needs: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Cause"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}