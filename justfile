# Displays info when running `just` without subcommand
default:
    @echo 'Run `just --list` to see all available recipes'

# Start the cms
start:
    deno run --allow-read --allow-net ./lib/cli.ts 

# Build static site
build:
    deno run --allow-read --allow-net ./lib/cli.ts --build

# Update environment and dependencies
update:
    nix flake update
