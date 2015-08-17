install:
	# Install Ruby Gems
	@ echo "\n\n$$(tput setaf 6)Installing Ruby Gems...$$(tput sgr 0)\n\n"
	@ sleep 1
	bundle install --binstubs="bin/bundle/" --path="vendor/bundle"
	@ echo "\n\n$$(tput setaf 6)...DONE!$$(tput sgr 0)"

	# Install Node Packages
	@ echo "\n\n$$(tput setaf 6)Installing Node Packages...$$(tput sgr 0)\n\n"
	@ sleep 1
	npm install
	@ echo "\n\n$$(tput setaf 6)...DONE!$$(tput sgr 0)"

	# Install Bower Components
	@ echo "\n\n$$(tput setaf 6)Installing Bower Components...$$(tput sgr 0)\n\n"
	@ sleep 1
	bower install
	@ echo "\n\n$$(tput setaf 6)...DONE!$$(tput sgr 0)"