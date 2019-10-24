const maxDegradation = '10%';

const files = [
  ['Accordion.js', 57],
  ['AddItem.js', 103],
  ['AutoComplete.js', 148],
  ['AutoCompleteComposite.js', 152],
  ['Avatar.js', 46],
  ['Badge.js', 23],
  ['BadgeSelect.js', 120],
  ['BadgeSelectItemBuilder.js', 16],
  ['BarChart.js', 99],
  ['Box.js', 8],
  ['Breadcrumbs.js', 19],
  ['Button.js', 17],
  ['Calendar.js', 155],
  ['CalendarPanel.js', 156],
  ['CalendarPanelFooter.js', 166],
  ['Card.js', 46],
  ['CardGalleryItem.js', 129],
  ['Carousel.js', 146],
  ['Checkbox.js', 104],
  ['CircularProgressBar.js', 82],
  ['CloseButton.js', 22],
  ['Collapse.js', 19],
  ['ColorInput.js', 162],
  ['ColorPicker.js', 156],
  ['ComposerHeader.js', 31],
  ['ContactItemBuilder.js', 37],
  ['CounterBadge.js', 14],
  ['DataTable.js', 130],
  ['DateInput.js', 155],
  ['DatePicker.js', 192],
  ['Divider.js', 7],
  ['Dropdown.js', 170],
  ['DropdownBase.js', 114],
  ['DropdownLayout.js', 109],
  ['EditableSelector.js', 150],
  ['EditableTitle.js', 132],
  ['EmptyState.js', 18],
  ['EndorseContentLayout.js', 16],
  ['ErrorIndicator.js', 97],
  ['FilePicker.js', 10],
  ['FillButton.js', 115],
  ['FillPreview.js', 30],
  ['FloatingHelper.js', 97],
  ['FloatingNotification.js', 42],
  ['FormField.js', 100],
  ['FullTextView.js', 77],
  ['GenericModalLayout.js', 7],
  ['GoogleAddressInput.js', 152],
  ['GoogleAddressInputWithLabel.js', 157],
  ['GooglePreview.js', 16],
  ['Grid.js', 10],
  ['Heading.js', 14],
  ['Highlighter.js', 9],
  ['IconButton.js', 21],
  ['ImageViewer.js', 124],
  ['Input.js', 132],
  ['InputArea.js', 101],
  ['InputWithLabel.js', 134],
  ['InputWithOptions.js', 147],
  ['Label.js', 13],
  ['LabelledElement.js', 17],
  ['Layout.js', 6],
  ['LinearProgressBar.js', 81],
  ['ListItemAction.js', 23],
  ['Loader.js', 102],
  ['Modal.js', 20],
  ['ModalPreviewLayout.js', 31],
  ['ModalSelectorLayout.js', 171],
  ['MultiSelect.js', 215],
  ['MultiSelectCheckbox.js', 156],
  ['MultiSelectComposite.js', 220],
  ['NestableList.js', 66],
  ['NoBorderInput.js', 133],
  ['Notification.js', 52],
  ['NumberInput.js', 133],
  ['Page.js', 70],
  ['PageHeader.js', 51],
  ['Popover.js', 74],
  ['PopoverMenu.js', 105],
  ['PopoverMenuItem.js', 18],
  ['Proportion.js', 6],
  ['RadioGroup.js', 26],
  ['Range.js', 196],
  ['RichTextInputArea.js', 359],
  ['Search.js', 153],
  ['SectionHelper.js', 38],
  ['SegmentedToggle.js', 101],
  ['Selector.js', 109],
  ['Sidebar.js', 12],
  ['SidebarDivider.js', 9],
  ['SidebarHeader.js', 18],
  ['SidebarSectionItem.js', 25],
  ['SidebarSectionTitle.js', 18],
  ['Skeleton.js', 7],
  ['Slider.js', 84],
  ['SocialPreview.js', 16],
  ['SortableList.js', 68],
  ['StatisticsWidget.js', 107],
  ['StatsWidget.js', 146],
  ['Stepper.js', 26],
  ['Swatches.js', 169],
  ['Table.js', 152],
  ['TableActionCell.js', 107],
  ['TableToolbar.js', 24],
  ['Tabs.js', 100],
  ['Tag.js', 34],
  ['Text.js', 15],
  ['TextButton.js', 21],
  ['Thumbnail.js', 24],
  ['TimeInput.js', 166],
  ['ToggleButton.js', 100],
  ['ToggleSwitch.js', 23],
  ['Tooltip.js', 95],
];

module.exports = {
  bundleSize: {
    files: files.map(([name, size]) => ({
      maxDegradation,
      maxSize: `${size}kb`,
      glob: `bundles/${name}`,
    })),
  },
};
