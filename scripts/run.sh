#!/usr/bin/env bash


which_bunion=$(which bunion);

if [[ -z "$which_bunion" ]]; then
  npm install -g bunion
fi



node . | bunion -l info --light