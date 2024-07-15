# Displays info when running `just` without subcommand
default:
    @echo 'Run `just --list` to see all available recipes'

run:
    deno run --allow-read cli.ts ./main.ts 

# Update environment and dependencies
update:
    nix flake update
