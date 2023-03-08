
        const urlParams = new URLSearchParams(window.location.search);
        const score = urlParams.get('score');
        const totalPoints = urlParams.get('total');
        document.getElementById('amountofpoints').textContent = score + " out of " + totalPoints;
    