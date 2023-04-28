import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export const AllNavDetails = {
  ChartsofAccounts: [
    "Account Group",
    "Account Sub Group",
    "General Ledger",
    "Subledger",
    "Ledger Import",
    "Merge Ledger",
    "Join Ledger",
    "Ledger Lock",
  ],
  AgentMaster: ["Main Agent", "Agent"],
  AreaMaster: ["Main Agent", "Agent"],
  MemberShipSetup: [
    "      MemberShip Type",
    "     MemberShip setup",
    "Gift Voucher Generate",
  ],
  DepartmentMASTER: ["Department"],
  TerminalMaster: [
    "Terminal Setup",
    "Floor Setup",
    "RoomNo Setup",
    "TableNO setup",
  ],
  CurrencyMaster: ["Currency"],

  CostCenterMaster: ["CostCenter"],
  ProductMASTER: [
    "Product SubGroup",
    "Product Unit",
    "Product/Item/Inventory",
    "Counter Product/Barcode",
    "(Mini) Counter Product/Barcode",
    "Spare Parts / Raw Materials",
    "Menu Setup",
    "Sub Menu Item",
    "Restro Product/Menu Items",
    "Movies",
    "Product Scheme",
    "Product Mapping",
    "Product Lock",
    "Product Update",
    "Product Import",
    "Barcode Print",
    "Product Assemble",
    "Spare Parts Import",
  ],
  GodownMaster: [" Godown", " Warehouse", "Rack Setup"],
  NarrationMaster: [" Narration & Remarks"],


  // ----------------------------------------------------------------------------------------------------
  // DATA ENTRY:[]
  OpeningMASTER: [
    " Ledger Opening",
    "List Wise Opening",
    "Product Opening",
    "List Wise Product Opening",
    "Product Opening From Excel",
    "Ledger Opening From Excel",
  ],

  PurchaseMASTER: [,
    "Indent",
    "Order",
    "Goods In Transit",
    "Challan(GRN)",
    "Challan Return",
    "Invoice",
    "Return Invoice",
    "Normal Invoice",
    "AVT Invoice",
    "Additional Invoice",
    "Exp / Brk Invoice",
  ],

  SalesMASTER: [
    " Quotation",
    " Order",
    " Challan",
    " Invoice",
    " Return Invoice",
    " Normal Invoice",
    "Service Invoice",
    " POS Invoice",
    " AVT Invoice",
    "Additional Invoice",
    " Exp / Brk Invoice",



  ],

  ProvisionTransaction:
    [
      "Journal Voucher",
      "Cash & Bank",
      "Purchase Invoice",
      " Sales Invoice",
      "Purchase Return",
      "Sales Return",
      " Debit Notes",
      "Credit Notes",

    ],

  FinanceTransaction:
    [
      "Journal Voucher",
      "Journal Voucher(Multi)",
      " Single Journal Voucher",
      " Payment Voucher",
      "Receipt Voucher",
      "Cash Voucher(Multi)",
      "Cash Voucher Entry",
      " Bank Voucher Entry",
      " Post Dated Cheque",
      " Debit Notes",
      " Credit Notes",
      " Sales Invoice",
      " Sales Return",
      " Purchase Invoice",
      " Purchase Return",
      " Money Exchange",
      " Lc Generate",

    ], 

  BranchWiseEntry:
  [
    "Intere Branch Purchase",
"Intere Branch Sales",
    ],

  StockTransaction:
[
 " Dash Board",
"Godown Transfer",
"Stock Adjustment",
"Physical Stock",
"ExperyBreakage",
],

  ProductionSystem:
[
  "Bill of Materials(BOM)",
   " Store Requistion",
    "RawMaterial Issue",
    "RawMaterial Return",
    "FinishedGoods Receive",
    "FinishedGoods Return",
   " Auto Consumption",
   " Production",
    "Loom Production",


],

  // ---------------------------------------------------------------------------------------------------------
  // Finance Report 


  FinanceReportList:
[

  "Cash & Bank",

  "Cash Flow",
  
 "Bank Reconcile",
  
 " Day Book",
  
 " Journal Voucher",
  
 " General Ledger",
  
  "Join Ledger",
  
 " Merge Ledger",



],

  TrialBalance:
[
  "Opening(OTB)",
  "Normal",
  "Perodic",

],


  ProfitLoss:
[
  "Normal",
"Perodic",
],

  BalanceSheet:
[

  "Opening",
  "Normal",
  "Perodic",


],


  Reportsfund:
[
  "Dynamic Reports",

  "Net Fund Position",
  
  "Department Wise Reports",

],


  DocumentPrinting:
[

  "Cash Bank",
  "Journal Voucher",
  "Debit Notes",
  "Credit Notes",


],


  ListofMaster:
[
  "General Ledger",

],

  // ----------------------------------------------------------------------------------------------


  PurchaseRegister:
[

  "Indent Register",
  "Order Register",
  "Goods In Transit Register",
  "Challan(GRN) Register",
  "Invoice Register",
  "Ticket Purchase Register",
  "Additional Register",
  "Return Register",
  "Exp / Brk Register",
],


  SalesRegister:
[

  "Quotation Register",
  "Order Register",
  "Challan Register",
  "Invoice Register",
  "Additional Register",
  "Return Register",
  "Exp / Brk Register",
  "Ticket Sales Register",

],

  PurchaseAnaylsis:
[
  "Year To Date",
  "Perodic",
  "Top 10 Wise",

],

  SalesAnaylsis:
[
 " Year To Date",
 " Perodic",
 " Top 10 Wise",
 " MemberShip Reports",

],


  NotesRegister:
[

  "Debit Notes",
  "Credit Notes",

],


  ReceiptandPaymentRegister:
[
  "Customer Wise",
 " Vendor Wise",
 " Both Wise",


],


  PartyLedger:
[
  "Customer" ,
  "Vendor",
  "Both",
  "Party Confirmation",


],

  PartyLedgerReconcile:
[

 " Customer" ,
 " Vendor",
 " Both",

],

  // LedgerReconcile

  AgeingReports:
[
  "Customer Wise",
  "Vendor Wise",
  "Both Wise",
  "Ledger",

],

// Branch Wise OutStanding

OutStandingReports:
[
  "Purchase Indent",
 " Purchase Quotation",
 " Purchase Order",
 " Goods In Transit",
 " Purchase Challan",
 " Sales Quotation",
 " Sales Order",
 " Sales Challan",
 " Customer",
"  Vendor",
"  Both",
],



  VatRegister:
[
  "Purchase Vat Register",
  "Purchase Return Vat Register",
  "Sales Vat Register",
  "Sales Return Vat Register",
 " Vat Register",
 " Materialized View",
 " Audit Trial",
 " Entry Log Register",
 " IRD Sales Sync",



],

  MaskeBariReports:
[
  "Month Wise",
"Yearly Confirmation",
"Vat RegisterIRD Format",
],


  // Dynamic Reports


  MISReports:
[

  "Top N Customer",
"Top N Vendor",
"Top N Product",
"Party Anaylsis",
],

  ListofMaster:
[
 " Document Numbering",
  "Document ReNumbering",
 " Purchase Term",
 " Sales Term",
 " Branch",
 " Unit",

],

  // ---------------------------------------------------------------------------------------------------------
  // STOCK REGISTER


  StockDetails:
[
 " Product Opening",
 " Stock Ledger",
 " Stock Ledger Include Value",
 " Special Reports",
 " Special Reports Product Wise",
 " Moment Anaylsis",
 " Stock Valuation",


],

  StockStatus:
[
  "GodownWise Valuation",
  "productWise Godown",
  "GodownWise product",

],


  Productcosting:
[
 " Landed Cost",
"  Product Wise",
 " Bill Wise Cost",

],


  // Profibility Reports


  Consumption: [
  "  Bill of Materials",
  "Store Requistion",
 " Issue Register",
 " Return Register",
  "Goods Received Register",
  "Goods Received Register",

  ],

    StockRegister: [

      "Godown Transfer",
"Stock Adjustment",
"Physical Stock",
"Expiry & Breakage",
    ],

      Manufacturing: [

        "CostCenter Expenses",
"Party Order",
"Sample Costing",
"Bill of Material",
"Production Issue",
"Production Transfer",
"Production Received",
"CostCenter Issue",
"CostCenter Transfer",
"CostCenter Receive",
      ],

        // Dynamic Reports


        ListOfMaster: [



          "Product Group",
"Product SubGroup",
"Product Unit",
"Product List",
"Product List With Image",
"Product Scheme",
"Godown Location",
"Godown",
"CostCenter",
"Colater",
"Special Product",
        ],


          // UTILITY

          SystemConfiguration: [


            "System setting",
"Finance Setting",
"Purchase Setting",
"Sales Setting",
"Inventory Setting",
"Payment setting",
"Ird Api Config",
"Night Audit Config",
          ],

            // Server connection

            // Backup Data

            // Repost Transaction


            // Restore Data

            // External Device Tools


            // SMS CONFIG


            // Closed FiscalYear

            ImportData: [
              "Local Import ",
  "Secondary GetServer",
  "Online Sync Data",
"LastYearClosing",
            ],


  // APIKeyList
  // OnlineConfig
  // OnlineDataSync
  // Shrink Database
  // ResetDatabase
  // Reconcile Data
  // Decrypt Value

  // -------------------------------------------------------------------------

  // About us











































};
