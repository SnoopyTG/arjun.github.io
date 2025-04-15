function analyzeText() {
    const text = document.getElementById('textInput').value;
    const output = document.getElementById('output');
  
    // Basic counts
    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const words = (text.match(/\b[a-zA-Z]+\b/g) || []).length;
    const spaces = (text.match(/ /g) || []).length;
    const newlines = (text.match(/\n/g) || []).length;
    const specials = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
  
    // Tokenization
    const tokens = text.toLowerCase().split(/[^a-zA-Z]+/).filter(Boolean);
  
    // Define grammar groups
    const pronouns = ["i", "me", "you", "he", "him", "she", "her", "it", "we", "us", "they", "them", "my", "your", "his", "her", "its", "our", "their"];
    const prepositions = ["in", "on", "at", "by", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "over", "under"];
    const articles = ["a", "an"];
  
    // Count function
    function countOccurrences(group) {
      return group.reduce((acc, word) => {
        acc[word] = tokens.filter(token => token === word).length;
        return acc;
      }, {});
    }
  
    // Count all
    const pronounCounts = countOccurrences(pronouns);
    const prepositionCounts = countOccurrences(prepositions);
    const articleCounts = countOccurrences(articles);
  
    // Format Output
    let result = `Letters: ${letters}
  Words: ${words}
  Spaces: ${spaces}
  Newlines: ${newlines}
  Special Symbols: ${specials}
  
  Pronouns:\n`;
    for (let [k, v] of Object.entries(pronounCounts)) {
      if (v > 0) result += `${k}: ${v}\n`;
    }
  
    result += `\nPrepositions:\n`;
    for (let [k, v] of Object.entries(prepositionCounts)) {
      if (v > 0) result += `${k}: ${v}\n`;
    }
  
    result += `\nIndefinite Articles:\n`;
    for (let [k, v] of Object.entries(articleCounts)) {
      if (v > 0) result += `${k}: ${v}\n`;
    }
  
    output.textContent = result;
  }