function updateAgiBased()
{
    const agilityValue = parseInt(document.getElementById('agility').value);
    const ballisticSkillInput = document.getElementById('ballisticSkill');
    ballisticSkillInput.value += agilityValue;
}