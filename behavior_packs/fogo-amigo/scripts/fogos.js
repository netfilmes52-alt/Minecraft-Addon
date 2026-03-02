// Friendly Fire System Management Script

let isFriendlyFireEnabled = true;

function toggleFriendlyFire() {
    isFriendlyFireEnabled = !isFriendlyFireEnabled;
    if (isFriendlyFireEnabled) {
        console.log("Friendly fire is now enabled.");
    } else {
        console.log("Friendly fire is now disabled.");
    }
}

function checkFriendlyFireDamage(attacker, victim) {
    if (isFriendlyFireEnabled) {
        return attacker.damage(victim);
    } else {
        console.log("Friendly fire damage is disabled.");
    }
}

// Use the functions as needed
// toggleFriendlyFire(); // Call this to toggle friendly fire
// checkFriendlyFireDamage(attacker, victim); // Call this when checking for damage between players