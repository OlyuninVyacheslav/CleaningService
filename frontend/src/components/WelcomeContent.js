import * as React from 'react'

export default class WelcomeContent extends React.Component {
    render() {
        return (
            <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Количество:</label>
            <input type="number" id="quantity" name="quantity" className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-32 sm:text-sm border-2 py-2 px-3" required />
        </div>
        );
    };
}