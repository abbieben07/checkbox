//
//  NSCheckbox.swift
//  checkbox
//
//  Created by Abbie on 22/10/2021.
//

import SimpleCheckbox

@objcMembers
open class NSCheckbox: Checkbox {
  var delegate: NSCheckboxDelegate?

  open func addDelegate(_ deleagte: NSCheckboxDelegate) {
    self.delegate = deleagte
    self.addTarget(self, action: #selector(checkChange), for: .valueChanged)
  }

  open func checkChange(sender: NSCheckbox) {
    self.delegate?.onCheckChange(sender)
  }
}

