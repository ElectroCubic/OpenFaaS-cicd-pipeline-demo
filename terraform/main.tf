provider "null" {}

resource "null_resource" "deploy_backend" {
  provisioner "local-exec" {
    command = "cat ../password.txt | faas-cli login --username admin --password-stdin && faas-cli up -f ../stack.yaml"
  }
}

resource "null_resource" "destroy_backend" {
  provisioner "local-exec" {
    when    = destroy
    command = "faas-cli remove node-app"
  }
}
