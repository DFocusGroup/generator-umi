#!/usr/bin/env bash

# 找到本项目进程，杀之
pid=`ps aux | grep -i 'node server --title=<%= answers.name %>' | grep -v grep | awk {'print $2'}`

if  [ ! -n "$pid" ] ;then
    echo "No process found, go ahead as you need"
else
    kill -9 $pid
    echo "Process" $pid "were killed"
fi
