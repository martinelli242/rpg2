function loadCharacter(jsonFilePath, containerId) {
  fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
      const charactersHTML = data.map(character => `
          <div class="character">
            <div class="character-info">
              <div class = "general">
                <h2>${character.name}</h2>
                <p>Archetype: ${character.archetype}</p>
                <p>Tier: ${character.tier}</p>
              </div>
                <container class="abilities">
                  <div class ="attributesAndTraits">
                    <p>Strength: ${character.strength}</p>
                    <p>Toughness: ${character.toughness}</p>
                    <p>Agility: ${character.agility}</p>
                    <p>Initiative: ${character.initiative}</p>
                    <p>Willpower: ${character.willpower}</p>
                    <p>Intellect: ${character.intellect}</p>              
                    <p>Fellowship: ${character.fellowship}</p>
                    <p>Defence: ${character.defence}</p>
                    <p>Resilience: ${character.resilience}</p>
                    <p>Determination: ${character.determination}</p>
                    <p>Max Wounds: ${character.max_wounds}</p>
                    <p>Max Shock: ${character.max_shock}</p>
                    <p>Speed: ${character.speed}</p>
                    <p>Conviction: ${character.conviction}</p>
                    <p>Resolve: ${character.resolve}</p>
                    <p>Corruption: ${character.corruption}</p>
                    <p>Passive Awareness: ${character.passive_awareness}</p>
                    <p>Influence: ${character.influence}</p>
                    <p>Wealth: ${character.wealth}</p>
                  </div>
                  <div class="skills">
                    <p>Athletics: ${character.athletics}</p>
                    <p>Awareness: ${character.awareness}</p>
                    <p>Ballistic Skill: ${character.ballistic_skill}</p>
                    <p>Cunning: ${character.cunning}</p>
                    <p>Deception: ${character.deception}</p>
                    <p>Insight: ${character.insight}</p>
                    <p>Intimidation: ${character.intimidation}</p>
                    <p>Investigation: ${character.investigation}</p>
                    <p>Leadership: ${character.leadership}</p>
                    <p>Medicae: ${character.medicae}</p>
                    <p>Persuasion: ${character.persuasion}</p>
                    <p>Pilot: ${character.pilot}</p>
                    <p>Psychic Mastery: ${character.psychic_mastery}</p>
                    <p>Scholar: ${character.scholar}</p>
                    <p>Stealth: ${character.stealth}</p>
                    <p>Survival: ${character.survival}</p>
                    <p>Tech: ${character.tech}</p>
                    <p>Weapon Skill: ${character.weapon_skill}</p>
                    </div>
                </container>
                <p class="text">Backstory: ${character.backstory}</p>
          </div>
        </div>
          `).join('');
  
          document.getElementById(containerId).innerHTML = charactersHTML;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }