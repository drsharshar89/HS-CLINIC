import { Puck } from "@puckeditor/core";
import { config } from "./config";
import "@puckeditor/core/dist/index.css";

const initialData = JSON.parse(localStorage.getItem("puck-data") || "{}");

export function Editor() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Puck
        config={config}
        data={initialData}
        onPublish={(data) => {
          console.log("Publishing:", data);
          localStorage.setItem("puck-data", JSON.stringify(data));
          alert("Changes saved locally! Refresh the home page to see them.");
        }}
      />
      <div className="bg-gold-900 text-white p-4 flex gap-4 justify-between items-center text-sm">
         <span>Drag sections from the right side. Click 'Publish' to save.</span>
         <div className="flex gap-2">
           <button 
             onClick={() => {
               const data = localStorage.getItem("puck-data");
               const blob = new Blob([data || "{}"], { type: "application/json" });
               const url = URL.createObjectURL(blob);
               const a = document.createElement("a");
               a.href = url;
               a.download = "clinic_content.json";
               a.click();
             }}
             className="bg-gold-600 px-3 py-1 rounded hover:bg-gold-500"
           >
             Download Content for Developer
           </button>
           <button 
             onClick={() => {
               const data = localStorage.getItem("puck-data");
               navigator.clipboard.writeText(data || "");
               alert("CMS Data copied to clipboard!");
             }}
             className="bg-gold-500 px-3 py-1 rounded hover:bg-gold-400"
           >
             Copy JSON
           </button>
         </div>
      </div>
    </div>
  );
}
