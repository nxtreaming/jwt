#!/bin/bash

pm2 --name jwtserver start npm -- start -- --port 3993

# list
# pm2 ps

# delete
# pm2 delete <id>
