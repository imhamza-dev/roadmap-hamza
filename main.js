module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
};

import './style.css';

// realtime-database

document
	.getElementById('statusForm')
	.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the form from submitting the traditional way

		// Get the form values
		const status = document.getElementById('status').value;
		const title = document.getElementById('title').value;
		const description = document.getElementById('description').value;

		// Create the table and append it to the DOM
		const tableContainer = document.getElementById('tableContainer');
		tableContainer.innerHTML = `
		<table class="table-auto bg-white shadow-lg rounded-lg">
			<thead>
				<tr>
					<th class="px-4 py-2">Status</th>
					<th class="px-4 py-2">Title</th>
					<th class="px-4 py-2">Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border px-4 py-2">${status}</td>
					<td class="border px-4 py-2">${title}</td>
					<td class="border px-4 py-2">${description}</td>
				</tr>
			</tbody>
		</table>
	`;

		// Optionally, clear the form fields
		document.getElementById('statusForm').reset();
	});
