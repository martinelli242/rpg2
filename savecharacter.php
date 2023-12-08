<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $characterStats = [
        "name" => $_POST['characterName'],
        "archetype" => $_POST['characterArchetype'],
        "tier" => $_POST['characterTier'],
        "strength" => $_POST['characterStrength'],
        "toughness" => $_POST['characterToughness'],
        "agility" => $_POST['characterAgility'],
        "initiative" => $_POST['characterInitiative'],
        "willpower" => $_POST['characterWillpower'],
        "intellect" => $_POST['characterIntellect'],
        "fellowship" => $_POST['characterFellowship'],
        "athletics" => $_POST['characterAthletics'],
        "awareness" => $_POST['characterAwareness'],
        "ballistic_skill" => $_POST['characterBallisticSkill'],
        "cunning" => $_POST['characterCunning'],
        "deception" => $_POST['characterDeception'],
        "insight" => $_POST['characterInsight'],
        "intimidation" => $_POST['characterIntimidation'],
        "investigation" => $_POST['characterInvestigation'],
        "leadership" => $_POST['characterLeadership'],
        "medicae" => $_POST['characterMedicae'],
        "persuasion" => $_POST['characterPersuasion'],
        "pilot" => $_POST['characterPilot'],
        "psychic_mastery" => $_POST['characterPsychicMastery'],
        "scholar" => $_POST['characterScholar'],
        "stealth" => $_POST['characterStealth'],
        "survival" => $_POST['characterSurvival'],
        "tech" => $_POST['characterTech'],
        "weapon_skill" => $_POST['characterWeaponSkill'],
		"defence" => $_POST['characterDefence'],
		"resilience" => $_POST['characterResilience'],
		"determination" => $_POST['characterDetermination'],
		"max_wounds" => $_POST['characterWounds'],
		"max_shock" => $_POST['characterShock'],
		"speed" => $_POST['characterSpeed'],
		"conviction" => $_POST['characterConviction'],
		"resolve" => $_POST['characterResolve'],
		"corruption" => $_POST['characterCorruption'],
		"passive_awareness" => $_POST['characterPAwareness'],
		"influence" => $_POST['characterInfluence'],
		"wealth" => $_POST['characterWealth'],
        "backstory"=>$_POST['characterBackground'],
    ];
    // Convert the array to JSON
    $jsonCharacterStats = json_encode($characterStats);
    $characterName = $_POST['characterName'];
    // Save the JSON to a file
    file_put_contents("characters/{$characterName}.json", '[' . $jsonCharacterStats . ']');
    
	header("Location: index.html");
} else {
    // Redirect to the form if accessed directly
    header("Location: index.html");
    exit();
}
?>
