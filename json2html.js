// json2html.js

export default function json2html(data) {
  // Start the table with the data-user attribute
  let table = '<table data-user="sandragirisaki2004@gmail.com">';

  // Create the table header with exactly 3 columns: Name, Age, and Gender
  table += '<thead><tr>';
  const columns = ['Name', 'Age', 'Gender']; // Fixed column names
  columns.forEach(column => {
    table += `<th>${column}</th>`;
  });
  table += '</tr></thead>';

  // Create the table body with data rows
  table += '<tbody>';
  data.forEach(row => {
    table += '<tr>';
    // For each row, ensure all columns (Name, Age, Gender) are included
    columns.forEach(column => {
      // If the column doesn't exist in the row, use an empty string
      table += `<td>${row[column] || ''}</td>`;
    });
    table += '</tr>';
  });
  table += '</tbody>';

  // Close the table tag
  table += '</table>';

  return table;
}
