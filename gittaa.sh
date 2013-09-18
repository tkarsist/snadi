#!/bin/bash
ps -ef|grep "bin/middleman"|awk '{print $2}'|xargs kill -9
git pull -r
bundle install
bundle exec middleman server &
