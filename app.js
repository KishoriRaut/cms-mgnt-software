document.getElementById("maidForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form elements
  const submitBtn = document.querySelector("#maidForm button[type='submit']");
  submitBtn.disabled = true;
  submitBtn.textContent = "Saving...";

  try {
    // Get form values
    const maidName = document.getElementById("maid_name").value;
    const docType = document.getElementById("document_type").value;
    const citizenship = document.getElementById("citizenship").value;
    const comments = document.getElementById("comments").value;
    const photoFile = document.getElementById("photo").files[0];

    // 1. Upload photo to Supabase Storage
    const photoPath = `maid_photos/${Date.now()}_${photoFile.name}`;
    const { data: photoData, error: uploadError } = await supabase.storage
      .from("maid_photos")
      .upload(photoPath, photoFile);

    if (uploadError) throw uploadError;

    // 2. Save data to database
    const { data, error } = await supabase
      .from("maids")
      .insert([{
        maid_name: maidName,
        document_type: docType,
        citizenship: citizenship,
        comments: comments,
        photo_url: photoData.path
      }]);

    if (error) throw error;

    alert("Data saved successfully!");
    document.getElementById("maidForm").reset();
  } catch (error) {
    console.error("Error:", error);
    alert("Error: " + error.message);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Save";
  }
});
