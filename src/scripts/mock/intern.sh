echo "message"
node ./node_modules/intermock/build/src/cli/index.js --files ./src/types/index.ts --interfaces "App" --output "json" >output-file.ts
