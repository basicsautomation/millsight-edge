import List "mo:core/List";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";

actor {
  type MillType = { #rice; #flour; #dal; #other };

  type Enquiry = {
    id : Nat;
    name : Text;
    companyName : Text;
    city : Text;
    phone : Text;
    email : Text;
    millType : MillType;
    message : Text;
    isDemo : Bool;
    timestamp : Int;
  };

  module Enquiry {
    public func compare(e1 : Enquiry, e2 : Enquiry) : Order.Order {
      Nat.compare(e1.id, e2.id);
    };
  };

  var nextId = 1;

  let enquiries = Map.empty<Nat, Enquiry>();

  func getNextId() : Nat {
    let id = nextId;
    nextId += 1;
    id;
  };

  public shared ({ caller }) func submitEnquiry(
    name : Text,
    companyName : Text,
    city : Text,
    phone : Text,
    email : Text,
    millType : MillType,
    message : Text,
    isDemo : Bool,
  ) : async Nat {
    let id = getNextId();
    let enquiry : Enquiry = {
      id;
      name;
      companyName;
      city;
      phone;
      email;
      millType;
      message;
      isDemo;
      timestamp = Time.now();
    };
    enquiries.add(id, enquiry);
    id;
  };

  public query ({ caller }) func getEnquiry(id : Nat) : async Enquiry {
    switch (enquiries.get(id)) {
      case (null) { Runtime.trap("Enquiry not found") };
      case (?enquiry) { enquiry };
    };
  };

  public query ({ caller }) func getEnquiries() : async [Enquiry] {
    enquiries.values().toArray().sort();
  };

  public query ({ caller }) func getEnquiriesByTimestamp() : async [Enquiry] {
    enquiries.values().toArray().sort(
      func(a, b) { Int.compare(a.timestamp, b.timestamp) }
    );
  };

  public query ({ caller }) func getCount() : async Nat {
    enquiries.size();
  };
};
