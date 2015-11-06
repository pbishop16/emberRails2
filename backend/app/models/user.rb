class User < ActiveRecord::Base

	before_save :downcase_email
	before_create :generate_authentication_token

	has_secure_password
	def User.digest(string)
		cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
																									BCrypt::Engine.cost
		BCrypt::Password.create(string, cost: cost)
	end

	def authenticated?(attribute, token)
    digest = send("#{attribute}_digest")
    return false if digest.nil?
    BCrypt::Password.new(digest).is_password?(token)
  end

	private

	def downcase_email
    self.email = email.downcase
  end

	def generate_authentication_token
		loop do 
			self.authentication_token = SecureRandom.base64(64)
			break unless User.find_by(authentication_token: authentication_token)
		end
	end
	
end
