function calculateProperties(a, b, c) {
    
    const axisOfSymmetry = -b / (2 * a);
    
   
    const vertexX = axisOfSymmetry;
    const vertexY = a * Math.pow(vertexX, 2) + b * vertexX + c;
    
    
    const opens = a > 0 ? "upward" : "downward";
    
    
    let range;
    if (a > 0) {
        range = `[${vertexY}, ∞)`;
    } else {
        range = `(-∞, ${vertexY}]`;
    }
    
    const domain = "(-∞, ∞)";
    
    const h = -b / (2 * a); 
    const k = a * Math.pow(h, 2) + b * h + c; 
    
    
    const vertexForm = `${a}(x ${h >= 0 ? '-' : '+'} ${Math.abs(h).toFixed(2)})² ${k >= 0 ? '+' : ''} ${k.toFixed(2)}`;
    
    return `
        <h3>Function Properties:</h3>
        <div class="math-properties">
            <p><strong>Axis of Symmetry:</strong> x = ${h.toFixed(2)}</p>
            <p><strong>Vertex:</strong> (${h.toFixed(2)}, ${k.toFixed(2)})</p>
            <p><strong>Opens:</strong> ${opens}</p>
            <p><strong>Domain:</strong> ${domain}</p>
            <p><strong>Range:</strong> ${range}</p>
            <p><strong>Standard Form:</strong> f(x) = ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}</p>
            <p><strong>Vertex Form:</strong> f(x) = ${vertexForm}</p>
        </div>
    `;
}

function solveQuad() {
    // Get input values
    const power = parseInt(document.getElementById('power').value);
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const resultDiv = document.getElementById('result');

    if (power === 2) {
        const discriminant = b * b - 4 * a * c;
        
        let solutionsHTML = '';
        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            solutionsHTML = `
                <h3>Solutions:</h3>
                <p>x₁ = ${x1.toFixed(2)}</p>
                <p>x₂ = ${x2.toFixed(2)}</p>
            `;
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            solutionsHTML = `
                <h3>Solution:</h3>
                <p>x = ${x.toFixed(2)}</p>
            `;
        } else {
            const realPart = (-b / (2 * a)).toFixed(2);
            const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
            solutionsHTML = `
                <h3>Complex Solutions:</h3>
                <p>x₁ = ${realPart} + ${imagPart}i</p>
                <p>x₂ = ${realPart} - ${imagPart}i</p>
            `;
        }

        resultDiv.innerHTML = solutionsHTML + calculateProperties(a, b, c);
        
    } else {
        resultDiv.innerHTML = `
            <p>Currently only quadratic equations (power = 2) are supported.</p>
        `;
    }
} 