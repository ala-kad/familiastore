import { useState } from "react";

interface Supplier{
  id: number;
  name: string;
  contact: string;
}

export default function SupplierManager() {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "Supplier 1", contact: "contact1@example.com" },
    { id: 2, name: "Supplier 2", contact: "" },
    { id: 3, name: "Supplier 3", contact: "" },
    { id: 4, name: "Supplier 4", contact: "" },
    { id: 5, name: "Supplier 5", contact: "" },
  ]);

  function handleAddSupplier() {
    console.log("Adding new supplier");
    let newSupplierId = suppliers.length > 0 ? suppliers[suppliers.length - 1].id + 1 : 1;
    let name = prompt("Enter supplier name:");
    let contact = prompt("Enter supplier contact:");
    if (name !== null && contact !== null) {
      setSuppliers([ ...suppliers, { id: newSupplierId, name, contact }]);
      alert("Supplier added successfully");
    }
  }

  function handleEdit(supplier: Supplier) {
    console.log("Editing supplier:", supplier);
    let newName = prompt("Enter new name:", supplier.name);
    let newContact = prompt("Enter new contact:", supplier.contact);
    if (newName !== null && newContact !== null) {
      setSuppliers(
        suppliers.map((s) =>
          s.id === supplier.id
            ? { ...s, name: newName, contact: newContact }
            : s,
        ),
      );
    }
    alert("Supplier updated successfully");
  }

  // Start Here: Implement the delete functionality
  function handleDelete(supplier: Supplier) {
    setSuppliers(suppliers.filter((s) => s.id !== supplier.id));
    alert(`Deleted supplier with id: ${supplier.id}`);
  }

  return (
    <div>
      <h1>Supplier Management Page</h1>
      <button onClick={handleAddSupplier}>Add Supplier</button>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300">ID</th>
            <th className="border border-gray-300">Name</th>
            <th className="border border-gray-300">Contact</th>
            <th className="border border-gray-300" colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td className="border border-gray-300">{supplier.id}</td>
              <td className="border border-gray-300">{supplier.name}</td>
              <td className="border border-gray-300">{supplier.contact}</td>
              <td className="border border-gray-300">
                <button onClick={() => handleEdit(supplier)}>Edit</button>
                <button onClick={() => handleDelete(supplier)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
