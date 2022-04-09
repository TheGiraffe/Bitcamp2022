import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState({
      name: "",
      description: "",
      needs: "",
    });

    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // Function to handle submissions
    async function onSubmit(e) {
        e.preventDefault();

        // when a post request is sent to the create url,  add a new cause to the database.
        const newCause = { ...form };

        await fetch("/cause/add",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCause),
        })
        .catch( error => {
            window.alert(error);
            return;
        });

        setForm({ name: "", description: "", needs: ""});
        navigate("/");
    }

    // return the form that the user fills in 
    return (
        <div>
            <h3>Create New Cause</h3>
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
                        value="Create Cause"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}