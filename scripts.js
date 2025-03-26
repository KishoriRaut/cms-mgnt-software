// Function to save the maid information form data
function saveFormData() {
    const maidName = document.getElementById('maidName').value;
    const documents = document.getElementById('documents').value;
    const comment = document.getElementById('comment').value;
    const maidImage = document.getElementById('maidImage').files[0];

    // Check if all fields are filled
    if (maidName && documents && comment) {
        let savedData = `
            <h3>Saved Information</h3>
            <p><strong>Name:</strong> ${maidName}</p>
            <p><strong>Document Type:</strong> ${documents}</p>
            <p><strong>Comment:</strong> ${comment}</p>
        `;

        // Display the saved data
        document.getElementById('savedData').innerHTML = savedData;

        // Clear the form
        document.getElementById('maidInfoForm').reset();
    } else {
        alert('Please fill in all the fields');
    }
}

// Insert data
async function insertData() {
  const { data, error } = await supabase
    .from('messages')
    .insert([{ content: "Hello from GitHub Pages!" }]);
}

// Read data
async function fetchData() {
  const { data, error } = await supabase
    .from('messages')
    .select('*');
  
  console.log(data);
}
