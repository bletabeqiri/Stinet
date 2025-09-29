var muaji = prompt("Te lutem shkruaj nje numer te muajit (1-12)")

if (muaji > 12 || muaji < 1) {
    console.log("Keni shkruar muajin gabim.")
}

else if (muaji <= 2 || muaji == 12) {
    console.log("Dimer!")
}
else if (muaji >= 3 && muaji <= 5) {
    console.log("Pranvere!")
}
else if (muaji >= 6 && muaji <= 8) {
    console.log("Vere!")
}
else if ( muaji >= 9 && muaji <= 11) {
    console.log("Vjeshte!")
}
