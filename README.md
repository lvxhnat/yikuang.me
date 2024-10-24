###

### Quick Start (Fresh VM)

Remove sudo-er access requirement for Docker

```bash
sudo groupadd docker # Create a docker group
sudo gpasswd -a $USER docker # Add ur user to the docker group
```
Install NGINX for Ubuntu

```bash 
sudo apt update
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx # Check nginx status
```