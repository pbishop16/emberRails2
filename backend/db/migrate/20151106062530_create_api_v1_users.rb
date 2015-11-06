class CreateApiV1Users < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.boolean :investor_funded,                      default: false
      t.string :company
      t.string :sector
      t.integer :customers
      t.integer :revenue
      t.text :company_description
      t.string :password_digest
      t.string :authentication_token
      t.datetime :created_at,                           null: false
      t.datetime :updated_at,                           null: false
      t.boolean  :activated,                            default: false
      t.string   :remember_digest
      t.string   :activation_digest
      t.datetime :activated_at
      t.datetime :reset_sent_at
      t.string   :reset_digest
    end
  end
end
