//
//  PlaceholderWindowViewController.swift
//  Penc
//
//  Created by Deniz Gurkaynak on 8.11.2017.
//  Copyright © 2017 Deniz Gurkaynak. All rights reserved.
//

import Cocoa

class PlaceholderWindowViewController: NSViewController {
    @IBOutlet var box: NSBox!
    @IBOutlet var dragImage: NSImageView!
    @IBOutlet var dragLabel1: NSTextField!
    @IBOutlet var dragLabel2: NSTextField!
    @IBOutlet var pinchImage: NSImageView!
    @IBOutlet var pinchLabel: NSTextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do view setup here.
        
    }
    
    func moveMode() {
        self.dragLabel1.stringValue = "Two finger drag to move"
        self.dragLabel2.stringValue = "Two finger swipe to snap"
        self.dragLabel2.alphaValue = 1
    }
    
    func resizeMode() {
        self.dragLabel1.stringValue = "Two finger scroll to resize"
        self.dragLabel2.alphaValue = 0
    }
    
    func hideInfo() {
        self.box.fillColor = NSColor(calibratedRed: 0, green: 0, blue: 0, alpha: 0.25)
        self.dragImage.alphaValue = 0
        self.dragLabel1.alphaValue = 0
        self.dragLabel2.alphaValue = 0
        self.pinchImage.alphaValue = 0
        self.pinchLabel.alphaValue = 0
    }
    
    func showInfo() {
        self.box.fillColor = NSColor(calibratedRed: 0, green: 0, blue: 0, alpha: 0.5)
        self.dragImage.alphaValue = 1
        self.dragLabel1.alphaValue = 1
        self.dragLabel2.alphaValue = 1
        self.pinchImage.alphaValue = 1
        self.pinchLabel.alphaValue = 1
    }
}

extension PlaceholderWindowViewController {
    // MARK: Storyboard instantiation
    static func freshController() -> PlaceholderWindowViewController {
        let storyboard = NSStoryboard(name: NSStoryboard.Name(rawValue: "Main"), bundle: nil)
        let identifier = NSStoryboard.SceneIdentifier(rawValue: "PlaceholderWindowViewController")
        guard let viewController = storyboard.instantiateController(withIdentifier: identifier) as? PlaceholderWindowViewController else {
            fatalError("Not found PlaceholderWindowViewController in Main.storyboard")
        }
        return viewController
    }
}

