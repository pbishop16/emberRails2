class Api::V1::UserSerializer < Api::V1::BaseSerializer
  attributes :id, :name, :email, :investor_funded, :company, :sector, :customers, :revenue, :company_description, :created_at, :updated_at
end
