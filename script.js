const copyToClipboard = async (value) => {
  try{
    await navigator.clipboard.writeText(value);
    alert('Copied to clipboard successfully!');
  }
  catch(error){
    alert(`Failed to copy to clipboard: Your browser doesn't support copying to clipboard!`);
  }
}

