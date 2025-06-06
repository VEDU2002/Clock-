let useAMPM = false;

    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      let period = '';

      if (useAMPM) {
        period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 0 to 12 for AM
      }

      const formattedTime = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
      ].join(':') + (useAMPM ? ` ${period}` : '');

      document.getElementById('clock').textContent = formattedTime;
    }

    document.getElementById('toggleBtn').addEventListener('click', () => {
      useAMPM = !useAMPM;
      document.getElementById('toggleBtn').textContent =
        useAMPM ? 'Switch to 24-Hour' : 'Switch to AM/PM';
      updateClock(); // update immediately on toggle
    });

    setInterval(updateClock, 1000);
    updateClock(); // initial call