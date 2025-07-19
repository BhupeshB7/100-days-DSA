function isBipartiteGraph(graph){
    let n = graph.length;
    let color = new Array(n).fill(-1);
    for(let i =0; i<n;i++){
        if(color[i] !== -1) continue;
        const queue =[i];
        color[i]=0;
        while(queue.length){
            const node = queue.shift();
            for(let neighbor of graph[node]){
                if(color[neighbor]=== -1){
                    color[neighbor] = 1-color[node];
                    queue.push(neighbor);
                }else if(color[neighbor] ===color[node]){
                    return false;
                }
            }
        }
    }
    return true;
}
graph = [
  [1, 3],     // Node 0 is connected to 1 and 3
  [0, 2],     // Node 1 is connected to 0 and 2
  [1, 3],     // Node 2 is connected to 1 and 3
  [0, 2]      // Node 3 is connected to 0 and 2
];


console.log(isBipartiteGraph(graph))