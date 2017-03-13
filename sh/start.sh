sudo bower install --allow-root
mkdir ./_dev
jekyll new ./_dev
bundle install
mkdir ./_dev/_data
rm ./_dev/_config.yml
gulp