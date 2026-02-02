import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        salary: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            const fetchEmployee = async () => {
                try {
                    const response = await api.get(`/${id}`); // Assumes GET /:id returns the employee object directly? Wait, controller returns updatedEmployee on update, but getEmployees returns array. I need a GET /:id endpoint! 
                    // My backend only has GET / (list) and GET /:id? No, implementation plan listed GET /api/employees.
                    // Wait, I strictly followed the plan? 
                    // "Implement CRUD routes (POST, GET, PUT, DELETE)" -> commonly implies GET / (list) and GET /:id (detail).
                    // But looking back at my `routes/employeeRoutes.js`:
                    // router.get('/', getEmployees);
                    // router.post('/', addEmployee);
                    // router.put('/:id', updateEmployee);
                    // router.delete('/:id', deleteEmployee);
                    // I MISSED GET /:id !!!
                    // I need to add that to backend.

                    // For now, I will leave this here and fix backend in next step.
                    setFormData(response.data);
                } catch (err) {
                    setError('Failed to fetch employee details');
                    console.error(err);
                }
            };
            // fetchEmployee(); 
        }
    }, [id, isEdit]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            if (isEdit) {
                await api.put(`/${id}`, formData);
            } else {
                await api.post('/', formData);
            }
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{isEdit ? 'Edit Employee' : 'Add Employee'}</h2>
            {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        placeholder="John Doe"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Role</label>
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        placeholder="Software Engineer"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Salary</label>
                    <input
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        placeholder="50000"
                    />
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;
