export const AllNavDetails = {
  ChartsofAccounts: [
    { title: "Account Group", route: "/accountGroup" },
    { title: "Account Sub Group", route: "/accountGroup" },
    { title: "General Ledger", route: "/accountGroup" },
    { title: "Subledger", route: "/accountGroup" },
    { title: "Ledger Import", route: "/accountGroup" },
    { title: "Merge Ledger", route: "/accountGroup" },
    { title: "Join Ledger", route: "/accountGroup" },
    { title: "Ledger Lock", route: "/accountGroup" },
  ],
  AgentMaster: [{ title: "Main Agent", route: "/accountGroup" }, { title: "Agent", route: "/accountGroup" }],
  AreaMaster: [{ title: "Main Agent", route: "/accountGroup" }, { title: "Agent", route: "/accountGroup" }],
  MemberShipSetup: [
    { title: "      MemberShip Type", route: "/accountGroup" },
    { title: "     MemberShip setup", route: "/accountGroup" },
    { title: "Gift Voucher Generate", route: "/accountGroup" },
  ],
  DepartmentMASTER: [{ title: "Department", route: "/accountGroup" }],
  TerminalMaster: [
    { title: "Terminal Setup", route: "/accountGroup" },
    { title: "Floor Setup", route: "/accountGroup" },
    { title: "RoomNo Setup", route: "/accountGroup" },
    { title: "TableNO setup", route: "/accountGroup" },
  ],
  CurrencyMaster: [{ title: "Currency", route: "/accountGroup" }],

  CostCenterMaster: [{ title: "CostCenter", route: "/accountGroup" }],
  ProductMASTER: [
    { title: "Product SubGroup", route: "/accountGroup" },
    { title: "Product Unit", route: "/accountGroup" },
    { title: "Product/Item/Inventory", route: "/accountGroup" },
    { title: "Counter Product/Barcode", route: "/accountGroup" },
    { title: "(Mini) Counter Product/Barcode", route: "/accountGroup" },
    { title: "Spare Parts / Raw Materials", route: "/accountGroup" },
    { title: "Menu Setup", route: "/accountGroup" },
    { title: "Sub Menu Item", route: "/accountGroup" },
    { title: "Restro Product/Menu Items", route: "/accountGroup" },
    { title: "Movies", route: "/accountGroup" },
    { title: "Product Scheme", route: "/accountGroup" },
    { title: "Product Mapping", route: "/accountGroup" },
    { title: "Product Lock", route: "/accountGroup" },
    { title: "Product Update", route: "/accountGroup" },
    { title: "Product Import", route: "/accountGroup" },
    { title: "Barcode Print", route: "/accountGroup" },
    { title: "Product Assemble", route: "/accountGroup" },
    { title: "Spare Parts Import", route: "/accountGroup" },
  ],
  GodownMaster: [{ title: " Godown", route: "/accountGroup" }, { title: " Warehouse", route: "/accountGroup" }, { title: "Rack Setup", route: "/accountGroup" }],
  NarrationMaster: [{ title: " Narration & Remarks", route: "/accountGroup" }],


  // ----------------------------------------------------------------------------------------------------
  // DATA ENTRY:[]
  OpeningMASTER: [
    { title: " Ledger Opening", route: "/accountGroup" },
    { title: "List Wise Opening", route: "/accountGroup" },
    { title: "Product Opening", route: "/accountGroup" },
    { title: "List Wise Product Opening", route: "/accountGroup" },
    { title: "Product Opening From Excel", route: "/accountGroup" },
    { title: "Ledger Opening From Excel", route: "/accountGroup" },
  ],

  PurchaseMASTER: [,
    { title: "Indent", route: "/accountGroup" },
    { title: "Order", route: "/accountGroup" },
    { title: "Goods In Transit", route: "/accountGroup" },
    { title: "Challan(GRN)", route: "/accountGroup" },
    { title: "Challan Return", route: "/accountGroup" },
    { title: "Invoice", route: "/accountGroup" },
    { title: "Return Invoice", route: "/accountGroup" },
    { title: "Normal Invoice", route: "/accountGroup" },
    { title: "AVT Invoice", route: "/accountGroup" },
    { title: "Additional Invoice", route: "/accountGroup" },
    { title: "Exp / Brk Invoice", route: "/accountGroup" },
  ],

  SalesMASTER: [
    { title: " Quotation", route: "/accountGroup" },
    { title: " Order", route: "/accountGroup" },
    { title: " Challan", route: "/accountGroup" },
    { title: " Invoice", route: "/accountGroup" },
    { title: " Return Invoice", route: "/accountGroup" },
    { title: " Normal Invoice", route: "/accountGroup" },
    { title: "Service Invoice", route: "/accountGroup" },
    { title: " POS Invoice", route: "/accountGroup" },
    { title: " AVT Invoice", route: "/accountGroup" },
    { title: "Additional Invoice", route: "/accountGroup" },
    { title: " Exp / Brk Invoice", route: "/accountGroup" },



  ],

  ProvisionTransaction:
  {
    title: [
      { title: "Journal Voucher", route: "/accountGroup" },
      { title: "Cash & Bank", route: "/accountGroup" },
      { title: "Purchase Invoice", route: "/accountGroup" },
      { title: " Sales Invoice", route: "/accountGroup" },
      { title: "Purchase Return", route: "/accountGroup" },
      { title: "Sales Return", route: "/accountGroup" },
      { title: " Debit Notes", route: "/accountGroup" },
      { title: "Credit Notes", route: "/accountGroup" },

    ],

    FinanceTransaction:
      [
        { title: "Journal Voucher", route: "/accountGroup" },
        { title: "Journal Voucher(Multi)", route: "/accountGroup" },
        { title: " Single Journal Voucher", route: "/accountGroup" },
        { title: " Payment Voucher", route: "/accountGroup" },
        { title: "Receipt Voucher", route: "/accountGroup" },
        { title: "Cash Voucher(Multi)", route: "/accountGroup" },
        { title: "Cash Voucher Entry", route: "/accountGroup" },
        { title: " Bank Voucher Entry", route: "/accountGroup" },
        { title: " Post Dated Cheque", route: "/accountGroup" },
        { title: " Debit Notes", route: "/accountGroup" },
        { title: " Credit Notes", route: "/accountGroup" },
        { title: " Sales Invoice", route: "/accountGroup" },
        { title: " Sales Return", route: "/accountGroup" },
        { title: " Purchase Invoice", route: "/accountGroup" },
        { title: " Purchase Return", route: "/accountGroup" },
        { title: " Money Exchange", route: "/accountGroup" },
        { title: " Lc Generate", route: "/accountGroup" },

      ],

    BranchWiseEntry:
      [
        { title: "Intere Branch Purchase", route: "/accountGroup" },
        { title: "Intere Branch Sales", route: "/accountGroup" },
      ],

    StockTransaction:
      [
        { title: " Dash Board", route: "/accountGroup" },
        { title: "Godown Transfer", route: "/accountGroup" },
        { title: "Stock Adjustment", route: "/accountGroup" },
        { title: "Physical Stock", route: "/accountGroup" },
        { title: "ExperyBreakage", route: "/accountGroup" },
      ],

    ProductionSystem:
      [
        { title: "Bill of Materials(BOM)", route: "/accountGroup" },
        { title: " Store Requistion", route: "/accountGroup" },
        { title: "RawMaterial Issue", route: "/accountGroup" },
        { title: "RawMaterial Return", route: "/accountGroup" },
        { title: "FinishedGoods Receive", route: "/accountGroup" },
        { title: "FinishedGoods Return", route: "/accountGroup" },
        { title: " Auto Consumption", route: "/accountGroup" },
        { title: " Production", route: "/accountGroup" },
        { title: "Loom Production", route: "/accountGroup" },


      ],

    // ---------------------------------------------------------------------------------------------------------
    // Finance Report 


    FinanceReportList:
      [

        { title: "Cash & Bank", route: "/accountGroup" },

        { title: "Cash Flow", route: "/accountGroup" },

        { title: "Bank Reconcile", route: "/accountGroup" },

        { title: " Day Book", route: "/accountGroup" },

        { title: " Journal Voucher", route: "/accountGroup" },

        { title: " General Ledger", route: "/accountGroup" },

        { title: "Join Ledger", route: "/accountGroup" },

        { title: " Merge Ledger", route: "/accountGroup" },



      ],

    TrialBalance:
      [
        { title: "Opening(OTB)", route: "/accountGroup" },
        { title: "Normal", route: "/accountGroup" },
        { title: "Perodic", route: "/accountGroup" },

      ],


    ProfitLoss:
      [
        { title: "Normal", route: "/accountGroup" },
        { title: "Perodic", route: "/accountGroup" },
      ],

    BalanceSheet:
      [

        { title: "Opening", route: "/accountGroup" },
        { title: "Normal", route: "/accountGroup" },
        { title: "Perodic", route: "/accountGroup" },


      ],


    Reportsfund:
      [
        { title: "Dynamic Reports", route: "/accountGroup" },
        { title: "Net Fund Position", route: "/accountGroup" },
        { title: "Department Wise Reports", route: "/accountGroup" },

      ],


    DocumentPrinting:
      [

        { title: "Cash Bank", route: "/accountGroup" },
        { title: "Journal Voucher", route: "/accountGroup" },
        { title: "Debit Notes", route: "/accountGroup" },
        { title: "Credit Notes", route: "/accountGroup" },


      ],


    ListofMaster:
      [
        { title: "General Ledger", route: "/accountGroup" },

      ],

    // ----------------------------------------------------------------------------------------------


    PurchaseRegister:
      [

        { title: "Indent Register", route: "/accountGroup" },
        { title: "Order Register", route: "/accountGroup" },
        { title: "Goods In Transit Register", route: "/accountGroup" },
        { title: "Challan(GRN) Register", route: "/accountGroup" },
        { title: "Invoice Register", route: "/accountGroup" },
        { title: "Ticket Purchase Register", route: "/accountGroup" },
        { title: "Additional Register", route: "/accountGroup" },
        { title: "Return Register", route: "/accountGroup" },
        { title: "Exp / Brk Register", route: "/accountGroup" },
      ],


    SalesRegister:
      [

        { title: "Quotation Register", route: "/accountGroup" },
        { title: "Order Register", route: "/accountGroup" },
        { title: "Challan Register", route: "/accountGroup" },
        { title: "Invoice Register", route: "/accountGroup" },
        { title: "Additional Register", route: "/accountGroup" },
        { title: "Return Register", route: "/accountGroup" },
        { title: "Exp / Brk Register", route: "/accountGroup" },
        { title: "Ticket Sales Register", route: "/accountGroup" },

      ],

    PurchaseAnaylsis:
      [
        { title: "Year To Date", route: "/accountGroup" },
        { title: "Perodic", route: "/accountGroup" },
        { title: "Top 10 Wise", route: "/accountGroup" },

      ],

    SalesAnaylsis:
      [
        { title: " Year To Date", route: "/accountGroup" },
        { title: " Perodic", route: "/accountGroup" },
        { title: " Top 10 Wise", route: "/accountGroup" },
        { title: " MemberShip Reports", route: "/accountGroup" },

      ],


    NotesRegister:
      [

        { title: "Debit Notes", route: "/accountGroup" },
        { title: "Credit Notes", route: "/accountGroup" },

      ],


    ReceiptandPaymentRegister:
      [
        { title: "Customer Wise", route: "/accountGroup" },
        { title: " Vendor Wise", route: "/accountGroup" },
        { title: " Both Wise", route: "/accountGroup" },


      ],


    PartyLedger:
      [
        { title: "Customer", route: "/accountGroup" },
        { title: "Vendor", route: "/accountGroup" },
        { title: "Both", route: "/accountGroup" },
        { title: "Party Confirmation", route: "/accountGroup" },


      ],

    PartyLedgerReconcile:
      [

        { title: " Customer", route: "/accountGroup" },
        { title: " Vendor", route: "/accountGroup" },
        { title: " Both", route: "/accountGroup" },

      ],

    // LedgerReconcile

    AgeingReports:
      [
        { title: "Customer Wise", route: "/accountGroup" },
        { title: "Vendor Wise", route: "/accountGroup" },
        { title: "Both Wise", route: "/accountGroup" },
        { title: "Ledger", route: "/accountGroup" },

      ],

    // Branch Wise OutStanding

    OutStandingReports:
      [
        { title: "Purchase Indent", route: "/accountGroup" },
        { title: " Purchase Quotation", route: "/accountGroup" },
        { title: " Purchase Order", route: "/accountGroup" },
        { title: " Goods In Transit", route: "/accountGroup" },
        { title: " Purchase Challan", route: "/accountGroup" },
        { title: " Sales Quotation", route: "/accountGroup" },
        { title: " Sales Order", route: "/accountGroup" },
        { title: " Sales Challan", route: "/accountGroup" },
        { title: " Customer", route: "/accountGroup" },
        { title: "  Vendor", route: "/accountGroup" },
        { title: "  Both", route: "/accountGroup" },
      ],



    VatRegister:
      [
        { title: "Purchase Vat Register", route: "/accountGroup" },
        { title: "Purchase Return Vat Register", route: "/accountGroup" },
        { title: "Sales Vat Register", route: "/accountGroup" },
        { title: "Sales Return Vat Register", route: "/accountGroup" },
        { title: " Vat Register", route: "/accountGroup" },
        { title: " Materialized View", route: "/accountGroup" },
        { title: " Audit Trial", route: "/accountGroup" },
        { title: " Entry Log Register", route: "/accountGroup" },
        { title: " IRD Sales Sync", route: "/accountGroup" },



      ],

    MaskeBariReports:
      [
        { title: "Month Wise", route: "/accountGroup" },
        { title: "Yearly Confirmation", route: "/accountGroup" },
        { title: "Vat RegisterIRD Format", route: "/accountGroup" },
      ],


    // Dynamic Reports


    MISReports:
      [

        { title: "Top N Customer", route: "/accountGroup" },
        { title: "Top N Vendor", route: "/accountGroup" },
        { title: "Top N Product", route: "/accountGroup" },
        { title: "Party Anaylsis", route: "/accountGroup" },
      ],

    ListofMaster:
      [
        { title: " Document Numbering", route: "/accountGroup" },
        { title: "Document ReNumbering", route: "/accountGroup" },
        { title: " Purchase Term", route: "/accountGroup" },
        { title: " Sales Term", route: "/accountGroup" },
        { title: " Branch", route: "/accountGroup" },
        { title: " Unit", route: "/accountGroup" },

      ],

    // ---------------------------------------------------------------------------------------------------------
    // STOCK REGISTER


    StockDetails:
      [
        { title: " Product Opening", route: "/accountGroup" },
        { title: " Stock Ledger", route: "/accountGroup" },
        { title: " Stock Ledger Include Value", route: "/accountGroup" },
        { title: " Special Reports", route: "/accountGroup" },
        { title: " Special Reports Product Wise", route: "/accountGroup" },
        { title: " Moment Anaylsis", route: "/accountGroup" },
        { title: " Stock Valuation", route: "/accountGroup" },


      ],

    StockStatus:
      [
        { title: "GodownWise Valuation", route: "/accountGroup" },
        { title: "productWise Godown", route: "/accountGroup" },
        { title: "GodownWise product", route: "/accountGroup" },

      ],


    Productcosting:
      [
        { title: " Landed Cost", route: "/accountGroup" },
        { title: "  Product Wise", route: "/accountGroup" },
        { title: " Bill Wise Cost", route: "/accountGroup" },

      ],


    // Profibility Reports


    Consumption: [
      { title: "  Bill of Materials", route: "/accountGroup" },
      { title: "Store Requistion", route: "/accountGroup" },
      { title: " Issue Register", route: "/accountGroup" },
      { title: " Return Register", route: "/accountGroup" },
      { title: "Goods Received Register", route: "/accountGroup" },
      { title: "Goods Received Register", route: "/accountGroup" },

    ],

    StockRegister: [

      { title: "Godown Transfer", route: "/accountGroup" },
      { title: "Stock Adjustment", route: "/accountGroup" },
      { title: "Physical Stock", route: "/accountGroup" },
      { title: "Expiry & Breakage", route: "/accountGroup" },
    ],

    Manufacturing: [

      { title: "CostCenter Expenses", route: "/accountGroup" },
      { title: "Party Order", route: "/accountGroup" },
      { title: "Sample Costing", route: "/accountGroup" },
      { title: "Bill of Material", route: "/accountGroup" },
      { title: "Production Issue", route: "/accountGroup" },
      { title: "Production Transfer", route: "/accountGroup" },
      { title: "Production Received", route: "/accountGroup" },
      { title: "CostCenter Issue", route: "/accountGroup" },
      { title: "CostCenter Transfer", route: "/accountGroup" },
      { title: "CostCenter Receive", route: "/accountGroup" },
    ],

    // Dynamic Reports


    ListOfMaster: [



      { title: "Product Group", route: "/accountGroup" },
      { title: "Product SubGroup", route: "/accountGroup" },
      { title: "Product Unit", route: "/accountGroup" },
      { title: "Product List", route: "/accountGroup" },
      { title: "Product List With Image", route: "/accountGroup" },
      { title: "Product Scheme", route: "/accountGroup" },
      { title: "Godown Location", route: "/accountGroup" },
      { title: "Godown", route: "/accountGroup" },
      { title: "CostCenter", route: "/accountGroup" },
      { title: "Colater", route: "/accountGroup" },
      { title: "Special Product", route: "/accountGroup" },
    ],


    // UTILITY

    SystemConfiguration: [


      { title: "System setting", route: "/accountGroup" },
      { title: "Finance Setting", route: "/accountGroup" },
      { title: "Purchase Setting", route: "/accountGroup" },
      { title: "Sales Setting", route: "/accountGroup" },
      { title: "Inventory Setting", route: "/accountGroup" },
      { title: "Payment setting", route: "/accountGroup" },
      { title: "Ird Api Config", route: "/accountGroup" },
      { title: "Night Audit Config", route: "/accountGroup" },
    ],

    // Server connection

    // Backup Data

    // Repost Transaction


    // Restore Data

    // External Device Tools


    // SMS CONFIG


    // Closed FiscalYear

    ImportData: [
      { title: "Local Import ", route: "/accountGroup" },
      { title: "Secondary GetServer", route: "/accountGroup" },
      { title: "Online Sync Data", route: "/accountGroup" },
      { title: "LastYearClosing", route: "/accountGroup" },
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


  }
}