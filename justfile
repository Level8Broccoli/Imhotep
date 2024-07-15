# Displays info when running `just` without subcommand
default:
    @echo 'Run `just --list` to see all available recipes'

# Update environment and dependencies
update:
    nix flake update
