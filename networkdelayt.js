/**
 * @param {number[][]} tiempo
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(tiempo, n, k) {
    
    var networkDelayTime = function(tiempo, n, k) {
        const graph = new Map();
        for (let i = 1; i <= n; i++) {
            graph.set(i, []);
        }
        for (const [u, v, w] of tiempo) {
            graph.get(u).push([v, w]);
        }
    
        // Step 2:Initialization
        const dist = Array(n + 1).fill(Infinity);
        dist[k] = 0;
    
        // Step 3: Priority Queue
        const pq = new MinPriorityQueue({ priority: x => x[1] });
        pq.enqueue([k, 0]);
    
        while (!pq.isEmpty()) {
            const [node, tiempo] = pq.dequeue().element;
            if (tiempo > dist[node]) continue;
            for (const [neighbor, weight] of graph.get(node)) {
                const newTime = tiempo + weight;
                if (newTime < dist[neighbor]) {
                    dist[neighbor] = newTime;
                    pq.enqueue([neighbor, newTime]);
                }
            }
        }
        
        const maxTime = Math.max(...dist.slice(1));
        return maxTime === Infinity ? -1 : maxTime;
    }
}
    
/*Notes:
-A network of n nodes labeled from 1 to n.

-travel times:
list: names this list containes the travel times between times
element: times[i]; ui source node, vi target node, wi time for s signal from ui to vi.

-signal transmission:
k = signal from a given node

objective: find the shortest time for a signal to reach all nodes from a specific node.

Process
Grap
Destination node and the travel time

Initialization
A distance array will keeep the track of the minimum time required to each node

Result
-Process all nodes
-maximum value in the distance array 
-maximum value in the distance array will be the answer
-if the array returns -1, the node is unreachable 
*/