const steps = document.querySelectorAll('.step');
const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const back2 = document.getElementById('back2');

function showStep(stepNumber) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === stepNumber - 1);
  });
}

// Step 1 Next button
next1.addEventListener('click', () => {
  const phone = document.getElementById('phone').value.trim();
  const error1 = document.getElementById('error1');

  if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
    error1.style.display = 'block';
  } else {
    error1.style.display = 'none';
    localStorage.setItem('phone', phone); // Save phone for later if needed
    showStep(2);
  }
});

// Step 2 Next button validation
next2.addEventListener('click', () => {
  const title = document.getElementById('title').value.trim();
  const name = document.getElementById('name').value.trim();
  const sex = document.getElementById('sex').value.trim();
  const address = document.getElementById('address').value.trim();
  const phone2 = document.getElementById('phone2').value.trim();
  const city = document.getElementById('city').value.trim();
  const pincode = document.getElementById('pincode').value.trim();

  if (!title || !name || !sex || !address || !phone2 || !city || !pincode) {
    alert('Please fill all required fields in Step 2.');
    return;
  }

  if (phone2.length < 10 || !/^\d{10,}$/.test(phone2)) {
    alert('Phone number should be at least 10 digits.');
    return;
  }

  // Save other data if you want:
  localStorage.setItem('title', title);
  localStorage.setItem('name', name);
  localStorage.setItem('sex', sex);
  localStorage.setItem('address', address);
  localStorage.setItem('phone2', phone2);
  localStorage.setItem('city', city);
  localStorage.setItem('pincode', pincode);

  alert('Step 2 completed! Next step coming soon...');
  // showStep(3);  // uncomment when step 3 ready
});

// Step 2 Back button
back2.addEventListener('click', () => {
  showStep(1);
});

// Optional: Location detection (basic example)
function detectLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        alert(`Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`);
      },
      () => {
        alert('Unable to detect location.');
      }
    );
  } else {
    alert('Geolocation not supported.');
  }
}
window.detectLocation = detectLocation; // expose to global for button onclick
