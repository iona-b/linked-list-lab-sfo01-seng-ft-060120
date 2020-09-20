function getName(node) {
    return node.name
}

function headNode(node, collection) {
    return collection[node]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, node, collection) { 
    let currentNode = headNode(node, collection)   
    for (let i = 0; i < index; i++) {
        currentNode = next(currentNode, collection)
    }
    return currentNode
}

function addressAt(index, node, collection) {
    if (index === 0) {
        return node
    } else {
        let currentNode = nodeAt(index-1, node, collection)
        return currentNode.next
    }
}

function indexAt(node, collection, address) {
    let currentNode = headNode(address, collection)
    let index = 0  
    if (currentNode === node) {
        return index
    } else {
        while (currentNode != node) {
            currentNode = next(currentNode, collection)
            currentNode === node ? index += 1 : null
        }
        return index
    }
}

function insertNodeAt(index, newNodeAddress, precedingNode, collection) {
    let currentNode = headNode(precedingNode, collection)
    let followingNode = currentNode.next
    currentNode.next = newNodeAddress
    let newNode = headNode(newNodeAddress, collection)
    newNode.next = followingNode
}

function deleteNodeAt(index, node, collection) {
    let previousNode = nodeAt(index-1, node, collection)
    let nodeToRemove = nodeAt(index, node, collection)
    previousNode.next = nodeToRemove.next
}