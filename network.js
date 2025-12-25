class NeuralNetwork{
    constructor(neuronCounts){
        this.levels = [];
        for(let i =0; i<neuronCounts.length-1; i++){
            this.levels.push(new Level(neuronCounts[i], neuronCounts[i+1]));
        }
    }
    static feedForward(givenInputs, network){
        let outputs = Level.feedForward(givenInputs, network.levels[0]);
        for (let i = 0; i < network.levels.length; i++) {
            outputs = Level.feedForward(outputs, network.levels[i]);
            
        }
        return outputs;
    }
}

class Level{
    constructor(inputCount, outputCount){
        this.inputs = new Array(inputCount)
        this.outputs = new Array(outputCount);
        this.biases = new Array(outputCount);

        this.weights = [];
        for(let i =0; i<outputCount; i++){
            this.weights[i] = new Array(outputCount);
        }
        Level.#randomize(this);
    }
    static #randomize(Level){
        for (let i = 0; i < inputs.length; i++) {
            for (let j = 0; j < outputs.length; j++) {
                Level.weights[i][j] = Math.random()*2-1;
            }
        }
        for (let i = 0; i < Level.biases.length; i++) {
            Level.biases[i] = Math.random()*2-1; 
        }
    }

    static feedForward(givenInputs, Level){
        for(let i =0; i<Level.inputs.length; i++){
            Level.inputs[i] = givenInputs[i];
        }
        for(let i =0; i<Level.outputs.length; i++){
            let sum = 0 ;
            for(let j =0; j<Level.inputs.length; j++){
                sum += Level.inputs[j] *Level.weights[j][i];
            }
            if(sum>Level.biases[i]) Level.outputs[i] = 1;
            else Level.outputs[i] = 0;
        }
        return Level.outputs;
    }
}