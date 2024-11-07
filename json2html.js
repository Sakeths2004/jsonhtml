// json2html.js

export default function json2html(data) {
    // Start the table with the data-user attribute
    let table = '<table data-user="12akaveeshbhat@gmail.com">';
  
    // Create the table header
    table += '<thead><tr>';
    // Get the column names from the first object in the data (keys)
    const columns = Object.keys(data[0]);
    columns.forEach(column => {
      table += `<th>${column}</th>`;
    });
    table += '</tr></thead>';
  
    // Create the table body with data rows
    table += '<tbody>';
    data.forEach(row => {
      table += '<tr>';
      columns.forEach(column => {
        // If the row does not have a column value, it will be skipped
        table += `<td>${row[column] || ''}</td>`;
      });
      table += '</tr>';
    });
    table += '</tbody>';
  
    // Close the table tag
    table += '</table>';
  
    return table;
  }
  