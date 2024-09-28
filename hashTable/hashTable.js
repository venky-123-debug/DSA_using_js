// Method:1  -  Using the Object Data Type

let hash = {}

hash["Hello"] = "John"
hash["Hello1"] = "John1"
hash["Hello2"] = "John2"
console.log({ hash })

for (var key in hash) {
  // use hasOwnProperty() to filter out properties from Object.prototype
  if (hash.hasOwnProperty(key)) {
    console.log("key is: " + key + ", value is: " + hash[key])
  }
}

// Method:2  -  Using the Map

var maphash = new Map()

maphash.set("key1", "value1")
maphash.set("key2", "value2")
maphash.set("key3", "value3")

console.log(maphash.get("key3"))

maphash.set("key1", "new value")

console.log(maphash.get("key1"))

console.log(maphash.size)

maphash.delete("key2")

console.log(maphash.size)
// Output: 2

for (const [key, value] of maphash) {
  console.log(key + " = " + value)
}
