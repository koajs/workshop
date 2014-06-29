#!/bin/bash
[ -f "/root/nave.sh" ] || wget --progress=bar:force https://raw.github.com/isaacs/nave/v0.4.5/nave.sh -O /root/nave.sh
chmod a+x /root/nave.sh
/root/nave.sh usemain 0.11
pushd /vagrant
npm install
npm test
popd
