terraform {
  backend "gcs" {
    credentials = "terraform-sa-key.json"
    bucket = "mussia4-terraform"
  }
}

//terraform {
//  required_providers {
//    google = {
//      source = "hashicorp/google"
//      version = "3.5.0"
//    }
//  }
//}

//module "gcloud" {
//  source  = "terraform-google-modules/gcloud/google"
//  version = "2.0.2"
//}

//resource "goog" "" {}
//
//provider "google-beta" {}
